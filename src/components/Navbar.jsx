import '../css/navbar.css'

export default function Navbar(){
    return (
    <div className = 'navbar'>
        <div className = 'logo-body'>
            <h1 className = 'logo'>LOGO</h1>
        </div>
        <div className = 'searchbar'>
            <div className='sub-searchbar'> 
                <img className = 'search-icon' />
                <p className='search-text'>Search here...</p>
            </div>

            <div className = 'sub-filters'>
                <img className='filter-icon' />
                <p className = 'filter-text'>Filters</p>
            </div>
        </div>
        <button className='nav-btn'>
            <p className = 'btn-text'>Become a Seller</p>
        </button>
    
    </div>)
}