const skillsCtrl = require('../controllers/skills.controller');

module.exports = (app) => {
  app.get('/listSkills', skillsCtrl.getAllSkills);
  app.get('/listSkillsByCat', skillsCtrl.getAllSkillsByCat);
  app.post('/addSkill', skillsCtrl.addSkill);
}