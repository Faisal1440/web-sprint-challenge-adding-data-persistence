exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', description: 'pj one pending', resource_id: 1},
        {name: 'project 2', description: 'pj is not pending ', resource_id: 2},
        {name: 'project 3', description: 'pj is not a pajama', resource_id: 3}
      ]);
    });
};