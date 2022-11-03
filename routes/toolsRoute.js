const router = require('express').Router();
const UsefulTools = require('../model/UsefulTools')
const toolsController = require('../controller/ToolsController'); 

router.get('/', toolsController.listTools)
router.get('/:id', toolsController.findById)
router.post('/',toolsController.createTool )
router.delete('/:id', toolsController.deleteTool)

module.exports = router;