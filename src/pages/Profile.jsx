const Profile = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* IMAGE */}
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            {/* INFO */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800">Ashwani Gupta</h1>
              <p className="text-gray-500 mt-2">admin@academicsutra.com</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Role</p>
                  <h3 className="font-semibold">Super Admin</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Department</p>
                  <h3 className="font-semibold">Conference Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;