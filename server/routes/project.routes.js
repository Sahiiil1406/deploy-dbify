const router=require('express').Router();
const { createProject, updateProject, deleteProject, getProject, getMyProjects }=require('../controllers/project.js');
const {initialiseProject,stopProject
    ,getDetailedSchema,updateProjectSchema
}=require('../controllers/schema.js');
const { authenticateToken }=require('../middleware/user.middleware.js');

router.post('/', authenticateToken, createProject);
router.get('/', authenticateToken, getMyProjects);
router.put('/:id', authenticateToken, updateProject);
router.delete('/:id', authenticateToken, deleteProject);
router.get('/:id', authenticateToken, getProject);


router.post('/initialise/:id', authenticateToken, initialiseProject);
router.post('/stop/:id', authenticateToken, stopProject);
router.get('/schema/:id', authenticateToken, getDetailedSchema);
router.put('/schema/:id', authenticateToken, updateProjectSchema);

module.exports = router;