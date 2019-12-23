const usersSkillsCtrl = require('../controllers/userskills.controller');

module.exports = (app) => {
  app.get('/userSkills', usersSkillsCtrl.getUserSkills)
     .post('/userSkills', usersSkillsCtrl.addUserSkill)
     .delete('/userSkills', usersSkillsCtrl.deleteUserSkill);

  app.get('/getUsersBySkill', usersSkillsCtrl.getUsersBySkill);
  app.get('/getUsersByFilter', usersSkillsCtrl.getUsersBySkillFilter);
}