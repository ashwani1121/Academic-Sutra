const Settings = () => {
  return (

    <section className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-6">

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <h3 className="font-semibold">
                Email Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Receive conference updates
              </p>

            </div>

            <input type="checkbox" className="w-5 h-5" />

          </div>

          <div className="flex items-center justify-between border-b pb-4">

            <div>

              <h3 className="font-semibold">
                Dark Mode
              </h3>

              <p className="text-sm text-gray-500">
                Switch dashboard appearance
              </p>

            </div>

            <input type="checkbox" className="w-5 h-5" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Settings;