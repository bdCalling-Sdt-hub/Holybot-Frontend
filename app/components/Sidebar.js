
export default function Sidebar() {
    return (
      <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col   py-[50px] px-5">
        {/* Sidebar */}
        <aside className="h-full w-64  text-white flex flex-col justify-between">
          {/* Header Section */}
          <div className="p-4 text-[#535136]  text-center font-bold text-4xl border-b ">
            Holybot
          </div>
  
          <div className=" pt-[680px]">
            <div className="text-black bg-[#dedcd1] px-8 py-2 rounded-full font-medium flex justify-center items-center gap-2">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
                className="w-12 h-12 object-cover rounded-full" // Ensures the image is sized properly
                alt="User Avatar"
              />
              <span className="text-sm">sharifmahamu@gmail.com</span>
            </div>
          </div>
        </aside>
      </div>
    );
  }
  