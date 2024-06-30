import axios from 'axios';
import React, { useState }  from 'react'

export default function PayUform() {
  
const [hash,setHash] = useState('')


const [formData, setFormData] = useState({
  name: '',
  email: '',
  amount: '',
  transactionId: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = async(e) => {
  e.preventDefault();
  // Handle form submission logic here
const getHash = await axios.post('http://localhost:5000/payu/hash',{...formData})

setHash(getHash.data.hash);

};
console.log(hash);



return (<>
  <form  onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="transactionId">Transaction ID:</label>
      <input
        type="text"
        id="transactionId"
        name="transactionId"
        value={formData.transactionId}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>

  {hash!==""&&
  <>

`<form action='https://test.payu.in/_payment' method='post'>
<input type="hidden" name="key" value="oZ7oo9" />
<input type="hidden" name="txnid" value={formData.transactionId} />
<input type="hidden" name="productinfo" value="TEST PRODUCT" />
<input type="hidden" name="amount" value={formData.amount} />
<input type="hidden" name="email" value={formData.email} />
<input type="hidden" name="firstname" value={formData.name} />
<input type="hidden" name="lastname" value="" />
<input type="hidden" name="surl" value="http://localhost:5000/payu/success" />
<input type="hidden" name="furl" value="http://localhost:5000/payu/failure" />
<input type="hidden" name="phone" value='testphone' />
<input type="hidden" name="hash" value={hash} />
<input type="submit" value="pay" /> 

</form>`

  </>
  }
  </>
  
);
}
