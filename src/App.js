import './index.css';
import CardLists from './component/cardlist';
import Card from './component/card';

function cart(CardList){
  return(
    <Card
    key={CardList.id}
    name={CardList.name}
    img={CardList.imgURL}
    />
  )
}

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }


  return (
    <div className="grid-container">
        <header className="header">
       <div className="menu">
       <button onClick={openMenu}>
       &#9776;
   </button>
       </div>
            <div className="brand">
                <a href="/">Lorem</a>
            </div>
            <div className="cart-Icon">
            <span className="fab fa-opencart carticon"></span>
            </div>
        </header>
        <aside className="sidebar">
            <h3 className="sidebarlogo">Lorem Ipsum</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                <a href="/">Service</a>
                </li>
                <li>
                <a href="/">Cusine</a>
                </li>
                <li>
                <a href="/">Gallery</a>
                </li>
                <li>
                <a href="/">Contact</a>
                </li>
                <li>
                <a href="/">Book</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
            <div className="desktopsidebar">
            <aside>
            <h3 className="sidebarlogo">Lorem Ipsum</h3>
            <ul>
            <li>
            <a href="/"><strike className="strike">About</strike></a>
        </li>
        <li>
        <a href="/">Service</a>
        </li>
        <li>
        <a href="/">Cusine</a>
        </li>
        <li>
        <a href="/">Gallery</a>
        </li>
        <li>
        <a href="/">Contact</a>
        </li>
        <li>
        <a href="/">Book</a>
        </li>
            </ul>
            <a className="Buttoncart" href="/">Cart</a>
        </aside>
            </div>
           
            <div className="contenarea">
            <div className="Headingtxt">
            <div className="Heading"> 
            <h1 className="headingh1">What are you having for Lunch?</h1>
            </div>
            <div className="headingtxt-right">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <hr className="titlehr"></hr>
            </div>
            </div>
            <div className="productcard">
               {CardLists.map(cart)}
                </div>
                <div className="mobilebuttomtext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <hr className="titlehr"></hr>
                </div>
                </div>
                
            </div>
            
        </main>
        <footer className="footer">
            All Right reserved
        </footer>
    </div>
  );
}

export default App;
