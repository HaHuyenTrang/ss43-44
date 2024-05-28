import React from 'react'
import './admin.css'
export default function Admin() {
  return (
    
    <div className='home'>
      <div className='home2'>
        <ul>
          <li><span className="material-symbols-outlined">
home
</span>Home</li>
          <li><span className="material-symbols-outlined">
list
</span>contents</li>
          <li><span className="material-symbols-outlined">
menu
</span>categories</li>
          <li><span className="material-symbols-outlined">
settings
</span>settings</li>
        </ul>
        <ul>
          <li><span className="material-symbols-outlined">
account_circle
</span> Admin</li>
        </ul>
      </div>
      <div className='home3'>
        <div className='item'>
          <button className='new'>+ New item</button>
          
          <ul>
            <li><span className="material-symbols-outlined">
grid_view
</span>Dashboard</li>
            <li>Commarce</li>
            <li>Analytics</li>
            <li>Cyrpto</li>
            <li>Helpdesk</li>
            <li>Monitoring</li>
            <li>Fitnes</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Application</li>
            <li><span className="material-symbols-outlined">

grid_view
</span>Elements</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Forms</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Plugins</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Elements</li>
            <li><span className="material-symbols-outlined">
grid_view
</span>Datagrid</li>
            <li><span className="material-symbols-outlined">

grid_view
</span>Settings</li>
          </ul>
        </div>
        <div className='add' >
          <div className='home4'>
            <ul>
              <li className='addnew'>Add new post1</li>
              <li>+ Add Content</li>
              <li>Settings</li>
            </ul>
            <ul>
              <li><input type="text" placeholder='Search content.. ' /></li>
            </ul>
          </div>
          <br />
          <div className='total'>
            <div className='total2'>
              <div>
              <span id='h1' className="material-symbols-outlined">shopping_bag</span> 
              </div>
              <div>
              <p>Total Sales</p>
              <p className='num'>$2,456</p>
              </div>

            </div>
            <div className='total2'>
              <div>
              <span id='h3' className
              ="material-symbols-outlined">storefront</span>
              </div>
              <div>
              <p>Total Expenses</p>
              <p className='num'>$3.326</p>
              </div>
            </div>
            <div className='total2'>
              <div>
              <span id='h2' className="material-symbols-outlined">group</span>
              </div>
              <div>
              <p>Total Visitors</p>
              <p className='num'>$5,325</p>
              </div>
            </div>
            <div className='total2'>
              <div>
              <span id='h3' className="material-symbols-outlined">list </span>
              </div>
              <div>
              <p>Total Orders</p>
              <p className='num'>$1,326</p>
              </div>
            </div>
          </div>
          <div className='sed'>
            <div className='title'>
              <h3>Form title</h3>
              <p id='p'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
              <p id='p' className='senec'><span id='p' className="material-symbols-outlined">error</span> Senectus malesuada suspendisse bibendum edit amet vitae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
