

import { useRouteError, isRouteErrorResponse, Link } from 'react-router';

import Footer from '../../shared/Footer';

function ErrorPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error)

  return (
    <>
    <div className="h-[500px] md:h-[800px] w-full relative text-white bg-gradient-to-bl from-sky-950 to-gray-900">
      <div className="absolute top-1/2 left-1/2">
        <div className="-translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px]">
        <div className="mb-4 text-6xl font-semibold">error!</div>
          <div className="border border-white/20 p-4 relative">

            <div>
              <p className="text-sm">Sorry, an unexpected error has occurred.</p>
              <p className="text-right">
                { isRouteError ? <i>{ error?.statusText }</i> : <i>Unkown Error</i> }
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="standard">Click here to Return Home</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ErrorPage;