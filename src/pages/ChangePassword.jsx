const ChangePassword = () => {
  return (

    <section className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Change Password
        </h1>

        <form className="space-y-6">

          <div>

            <label className="block mb-2 font-medium">
              Current Password
            </label>

            <input
              type="password"
              className="
                w-full border rounded-xl
                px-4 py-3 outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              New Password
            </label>

            <input
              type="password"
              className="
                w-full border rounded-xl
                px-4 py-3 outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              className="
                w-full border rounded-xl
                px-4 py-3 outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />

          </div>

          <button
            className="
              bg-gradient-to-r
              from-blue-600 to-purple-600
              text-white px-6 py-3
              rounded-xl
            "
          >
            Update Password
          </button>

        </form>

      </div>

    </section>
  );
};

export default ChangePassword;