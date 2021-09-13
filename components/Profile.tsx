import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Profile() {

  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">

          {/* Initial Name */}
          <span className="text-6xl">Lorem Ipsum</span>
          {/* End Initial Name */}

          {/* Current Position */}
          <span className="text-5xl">Lorem Ipsum</span>
          {/* End Current Position */}

          {/* Current Location */}
          <span className="text-5xl">Lorem Ipsum</span>
          {/* End Current Location */}

          {/* Profile Picture */}
          <div className="mt-16 mb-8">
            {/* <img src="https://picsum.photos/200" alt="Profile Picture" /> */}
            <LazyLoadImage
              className="rounded-full"
              alt="Profile picture"
              effect="opacity"
              src="/images/profile.png" />
          </div>
          {/* End Profile Picture */}
        </div>
      </div>
    </div>
  )
}