import React from "react";

export const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">Наша история</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        </p>
        <p className="text-gray-700 mb-4">
          Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor
          posuere. Praesent id metus massa, ut blandit odio.
        </p>
        <p className="text-gray-700">
          Proin quis tortor orci. Etiam at risus et justo dignissim congue.
          Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc
          eu ullamcorper orci.
        </p>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Современные технологии</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Высокое качество</h3>
          <p className="text-gray-700">
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            Suspendisse dictum feugiat nisl ut dapibus.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Надежность</h3>
          <p className="text-gray-700">
            Proin quis tortor orci. Etiam at risus et justo dignissim congue.
            Donec congue lacinia dui, a porttitor lectus.
          </p>
        </div>
      </div>
    </div>
  );
};
