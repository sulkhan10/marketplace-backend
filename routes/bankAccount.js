const BankAccountController = require('../controllers/BankAccountController')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.use(authentication)
router.post('/bankAccount', BankAccountController.createBankAccount)
router.patch('/bankAccount', BankAccountController.updateBankAccount)
router.delete('/bankAccount/:bankAccountId', BankAccountController.deleteBankAccount)
router.get('/bankAccount/:bankAccountId', BankAccountController.readBankAccountByBankAccountId)
router.get('/bankAccount', BankAccountController.readAllBankAccount)


module.exports = router