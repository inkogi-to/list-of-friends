const initialFriends = [{
    id: 118836, name: "Clark", image: "https://i.pravatar.cc/48?u=118836", balance: -7,
}, {
    id: 933372, name: "Sarah", image: "https://i.pravatar.cc/48?u=933372", balance: 20,
}, {
    id: 499476, name: "Anthony", image: "https://i.pravatar.cc/48?u=499476", balance: 0,
},];

export default function App() {
    return (<div className='app'>
            <div className="sidebar">
                <FriendsList/>
                <Form/>
                <Button>Add Friends</Button>
            </div>
            <FormSplitBill/>

    </div>
  );
}

function FriendsList() {
    const friends = initialFriends
    return (<ul>
        {friends.map(({id, name, image, balance}) => (<li key={id}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            {balance < 0 && (<p className="red">
                You owe {name} {Math.abs(balance)}$
            </p>)} {balance > 0 && (<p className="green">
            {name} owes you {Math.abs(balance)}$
        </p>)} {balance === 0 && (<p>
            You and {name} are even
        </p>)}
            <Button>Select</Button>
        </li>))}
    </ul>)
}

function Form() {
    return (<form className="form-add-friend">
        <label>Friend name</label>
        <input type="text"/>

        <label>Image url</label>
        <input type="text"/>

        <Button>Add</Button>
    </form>)
}

function Button({children}) {
    return <button className="button">{children}</button>


}

function FormSplitBill() {
    return (<form className="form-split-bill">
            <h2>Split a bill with x</h2>


            <label>💰Bill value</label>
            <input type="text"/>

            <label>🧍You expense</label>
            <input type="text"/>

            <label>👫X`s expense</label>
            <input type="text" disabled/>

        <label>🤑Who is paying the bill</label>
        <select>
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split bill</Button>
        </form>)
}


