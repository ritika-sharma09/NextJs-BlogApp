async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
   try {
    const response = await fetch('http://localhost:8080/contact', {
                method: 'POST',
                body: JSON.stringify(newMessage),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(response.ok){
                res.status(201).json({ message: 'Successfully stored message!', message: newMessage });
            }else{
                res.status(403).json({ message: 'Validation failed' }); 
            }
   } catch (error) {
    res.status(500).json({ message: 'Storing message failed!' });
    return;
   }
  }
}

export default handler;

