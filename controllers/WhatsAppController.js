class WhatsAppController {

    sendWhatsApp = async (req, res) => {
      try {
        await fetch(`https://api.green-api.com/waInstance${process.env.WHATSAPP_ID}/sendMessage/${process.env.WHATSAPP_TOKEN}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ chatId: `972586086033@c.us`, message: req.body.message })
        })
          .then(response => response.json())
          .then(data => {
            res.json(data);
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
  
  module.exports = new WhatsAppController();
  