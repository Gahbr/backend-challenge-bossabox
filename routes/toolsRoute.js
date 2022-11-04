const router = require('express').Router();
const UsefulTools = require('../model/UsefulTools')
const toolsController = require('../controller/ToolsController'); 


/**
 * @swagger
 * /tools/:
 *   get:
 *     description: Listando as ferramentas!
 *     responses:
 *       200:
 *         description: Success.
 */
router.get('/', toolsController.listTools)

/**
 * @swagger
 *
 * /tools/{id}:
 *   get:
 *     description: Listando as ferramentas por ID!
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso. 
 *       
 */
router.get('/:id', toolsController.findById)

/**
 * @swagger
 *
 * /tools/:
 *   post:
 *     description: Criando uma nova ferramenta!
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: link
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: tags
 *         in: formData
 *         required: true
 *         type: array
 *         collectionFormat: multi
 *     responses:
 *       200:
 *         description: Sucesso. 
 *       
 */
router.post('/',toolsController.createTool )

/**
 * @swagger
 *
 * /tools/{id}:
 *   delete:
 *     description: Deletando uma ferramenta!
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Deletado com sucesso. 
 *       
 */
router.delete('/:id', toolsController.deleteTool)

module.exports = router;