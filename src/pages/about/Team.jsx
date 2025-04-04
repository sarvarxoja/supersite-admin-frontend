export const AboutTeam = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Наша команда</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white shadow-md overflow-hidden"
          >
            <div className="h-64 bg-gray-300">
              <img
                src={`/api/placeholder/300/300`}
                alt={`Team Member ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Имя Фамилия</h3>
              <p className="text-gray-600 mb-3">Должность</p>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
