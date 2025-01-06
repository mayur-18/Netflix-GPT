import React, { useEffect } from 'react';
import { auth } from '../Utils/firebase'; // Make sure this is correctly imported
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Combine imports
import { addUser, removeUser } from '../Utils/useSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // Handle error
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Cleanup subscription to avoid memory leaks
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="relative w-full bg-cover bg-center bg-gradient-to-b from-black">
  <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-16 md:px-36 py-2  bg-opacity-50 z-10">
    {/* Logo */}
    <div className=" items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="h-16"
      />
    </div>

    {/* Sign Out Button */}
    {user && (
      <div>
        <button
          onClick={handleSignOut}
          className="bg-red-600 p-2 text-white rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    )}
  </header>
</div>

  );
};

export default Header;
