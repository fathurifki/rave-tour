function Header() {
  return (
    <div className="">
      <div className="flex w-full p-4 justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm flex items-center">
          TTC family of brands
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="inline-block w-4 h-4 ml-2"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
        <div className="flex space-x-8 text-sm font-medium">
          <a className="text-muted-foreground" href="#" rel="ugc">
            FAQs
          </a>
          <a className="text-muted-foreground" href="#" rel="ugc">
            Get a Quote
          </a>
          <a className="text-muted-foreground" href="#" rel="ugc">
            Agents Login
          </a>
          <div className="flex items-center">
            My Trafalgar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="inline-block w-4 h-4 ml-2"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 border-b  ">
        <div className="flex items-center space-x-6 ">
          <img
            src="https://via.placeholder.com/100x40"
            alt="Placeholder Image"
            className="h-10"
            width="100"
            height="40"
          />
          <nav className="flex space-x-8 text-sm font-medium">
            <div className="flex items-center">
              Destinations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline-block w-4 h-4 ml-2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
            <div className="flex items-center">
              Ways To Go
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline-block w-4 h-4 ml-2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
            <div className="flex items-center">
              Deals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline-block w-4 h-4 ml-2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
            <div className="flex items-center">
              About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline-block w-4 h-4 ml-2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
            <div className="flex items-center">
              Get Inspired
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="inline-block w-4 h-4 ml-2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <form className="flex items-center">
            <input
              className="flex h-10 w-full rounded-md border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2 border rounded-l-md"
              placeholder="Where to or what trip?"
              type="search"
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border-t border-r border-b rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </form>
          <div className="flex flex-col text-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+62 811 871 8008</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>65 8121 6065</span>
            </div>
            <span>or call your travel agent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
