import { ChangeEvent, useState } from "react"

const App = () => {
  type UserData = {
    firstname: string,
    lastname: string,
    age: number,
    favoriteFoods: string[]
  }

  const [formData, setFormData] = useState<UserData>({
    firstname: '',
    lastname: '',
    age: 0,
    favoriteFoods: []
  })
  const [showGreeting, setShowGreeting] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    if (name === 'favoriteFoods') {
      setFormData(prevData => ({
        ...prevData,
        favoriteFoods: checked ? [...prevData.favoriteFoods, value] : prevData.favoriteFoods.filter(food => food !== value)
      }))
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handleGreeting = () => {
    setShowGreeting(!showGreeting)
  }

  const handleClear = () => {
    setShowGreeting(false)
    setFormData({
      firstname: '',
      lastname: '',
      age: 0,
      favoriteFoods: []
    })
  }

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" onChange={handleChange} value={formData.firstname} id="firstname" name="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" onChange={handleChange} value={formData.lastname} id="lastname" name="lastname"/>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" onChange={handleChange} value={formData.age} id="age" name="age"/>
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" checked={formData.favoriteFoods.includes('Chicken')} onChange={handleChange} value="Chicken" />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" checked={formData.favoriteFoods.includes('Beef')} onChange={handleChange} value="Beef" />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" checked={formData.favoriteFoods.includes('Vegetables')} onChange={handleChange} value="Vegetables" />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" checked={formData.favoriteFoods.includes('Dessert')} onChange={handleChange} value="Dessert" />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" checked={formData.favoriteFoods.includes('Pork')} onChange={handleChange} value="Pork" />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleGreeting}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      <div className="output">
        {showGreeting && (
          <p>Hello {formData.firstname} {formData.lastname}. You are {formData.age} years old and your favorite foods are: {formData.favoriteFoods.join(', ')}.</p>
        )}
      </div>
    </div>
  )
}

export default App