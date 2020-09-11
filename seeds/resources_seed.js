
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'wind', description: 'element one', resource_id: 1},
        {name: 'water', description: 'element two', resource_id: 1},
        {name: 'earth', description: 'element three', resource_id: 1},
      ]);
  });
}