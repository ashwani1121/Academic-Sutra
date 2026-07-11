const notifications = [
  "Conference registration approved",
  "New conference added",
  "Profile updated successfully",
];

const Notifications = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>
        <div className="space-y-4">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 p-4 rounded-xl"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;