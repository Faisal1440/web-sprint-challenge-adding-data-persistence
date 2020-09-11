exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {name: 'work', description: 'not playing or sleeping', resource_id: 1},
        {name: 'play', description: 'not sleeping or working', resource_id: 1},
        {name: 'sleep', description: 'not working or playing', resource_id: 1},
      ]);
    });
};
