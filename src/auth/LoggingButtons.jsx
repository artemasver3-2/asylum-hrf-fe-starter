/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
  const isAuthenticated = false;

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
    } else {
      // TODO: Add Redirect functionality here:
    }
  };

  return (
    <button className='nav-btn py-1 w-[5.5rem]' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};