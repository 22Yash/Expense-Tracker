import { useNavigate } from "react-router-dom";



const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async(e) => {
    const userData = { name, email, password };
    e.preventDefault();
    try{
      const response = await fetch('https://expense-tracker-82ck.onrender.com/auth/register', {

            method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
        });

        const data = await response.json();
      
      if (response.ok) {
        alert(data.message || "Registration successful!"); // Show success alert
        navigate("/dashboard");
      } else {
        alert(data.message || "Registration failed!"); // Show error alert if failed
      }

    }catch(error){
        console.error(error);
        

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register YourSelf</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
