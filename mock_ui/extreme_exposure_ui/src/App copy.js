import { 
    useState
} from 'react';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from "react-router-dom";

import logo from './logo-eepseo1.svg';
import Graph from './Visualization.svg';
import LineGraph from './AnalyticsVis.svg';
import './App.css';
import React from 'react';

/* First, we create a nav bar. This nav bar will hover at the left side of the page and have rounded edges. 
    The logo will contain the title in it. It will also have 3 buttons: Dashboard, Analytics, and Settings.
*/
class Navigator extends React.Component {
    render() {
        return (
            <Router>
            <div className="nav-bar">
                <div className="logo">
                {/* <img src="placeholder.jpg" alt="Logo" /> */}
                     <img src={logo} alt="Logo">
                     </img>
                </div>
                <div className="nav-buttons">
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                    <Link to="/analytics"><button>Analytics</button></Link>
                    <Link to="/settings"><button>Settings</button></Link> 
                    {/* <Link to="/dashboard">Dashboard</Link>
                    <Link to="/analytics">Analytics</Link>
                    <Link to="/settings">Settings</Link> */}
                </div>
            </div>

                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </Router>
        );
    }
}




// function Dashboard() {
//     return (
//         <div className="dashboard-container">
//         <header className="dashboard-header">
//             <div className="project-selector">
//                 {/* Add your project selector here */}
//             </div>
//             <h1 className="dashboard-title">Dashboard</h1>
//         </header>
//         <div className="dashboard-content">
//             <img className="dashboard-graph" src={Graph} alt="Graph" />
//             <div className="category-selector">
//                 {/* Add your category selector here */}
//             </div>
//         </div>
//         </div>
//   )
  
  
// //   <h2>Dashboard</h2>;
// }

// import Graph from './Graph.svg';

// function Dashboard() {
//   const [selectedProject, setSelectedProject] = useState('Project A');
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleProjectChange = (e) => {
//     setSelectedProject(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     const isChecked = e.target.checked;

//     if (isChecked) {
//       setSelectedCategories([...selectedCategories, category]);
//     } else {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     }
//   };

//   return (
//     <div className="dashboard-page">
//       <header>
//         <div className="project-selector">
//           <select value={selectedProject} onChange={handleProjectChange}>
//             <option value="Project A">Project A</option>
//             <option value="Project B">Project B</option>
//             <option value="Project C">Project C</option>
//           </select>
//         </div>
//         <h1>Dashboard</h1>
//       </header>
//       <div className="graph-container">
//         <img src={Graph} alt="Graph" />
//       </div>newSeed
//               <input
//                 type="checkbox"
//                 value="Category A"
//                 checked={selectedCategories.includes('Category A')}
//                 onChange={handleCategoryChange}
//               />
//               Category A
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Category B"
//                 checked={selectedCategories.includes('Category B')}
//                 onChange={handleCategoryChange}
//               />
//               Category B
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="checkbox"
//                 value="Category C"
//                 checked={selectedCategories.includes('Category C')}
//                 onChange={handleCategoryChange}
//               />
//               Category C
//             </label>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }newSeed

// export default Dashboard;


function Dashboard() {
  const [projectName, setProjectName] = useState('Project A');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Category A', checked: true },
    { id: 2, name: 'Category B', checked: false },
    { id: 3, name: 'Category C', checked: true },
    { id: 4, name: 'Category D', checked: false },
  ]);

  const handleProjectChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCategoryChange = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, checked: !category.checked }
          : category
      )
    );
  };

  return (
        <div className="dashboard">
        <div className="header">
            <div className="project-selector">
            <select value={projectName} onChange={handleProjectChange}>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
            </select>
            <i className="arrow"></i>
            <div className="page-title-box">
                <h2 className="page-title">Dashboard</h2>

            </div>
            </div>
        </div>
        <div className='dashboard-body'>
            <img src={Graph} alt="Graph" className="graph" />
            <div className="category-selector">
                <h3 className="selector-title">Categories</h3>
                <ul className="category-list">
                {categories.map((category) => (
                    <li key={category.id}>
                    <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        checked={category.checked}
                        onChange={() => handleCategoryChange(category.id)}
                    />
                    <label htmlFor={`category-${category.id}`}>
                        {category.name}
                    </label>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        </div>
    );
}



function Analytics() {
    const [projectName, setProjectName] = useState('Project A');
    const [categories, setCategories] = useState([
      { id: 1, name: 'Keyword A', checked: true },
      { id: 2, name: 'Keyword B', checked: false },
      { id: 3, name: 'Keyword C', checked: true },
      { id: 4, name: 'Keyword D', checked: false },
      { id: 5, name: 'Keyword E', checked: false },
    ]);
  
    const handleProjectChange = (e) => {
      setProjectName(e.target.value);
    };
  
    const handleCategoryChange = (id) => {
      setCategories(
        categories.map((category) =>
          category.id === id
            ? { ...category, checked: !category.checked }
            : category
        )
      );
    };
  
    return (
          <div className="dashboard">
          <div className="header">
              <div className="project-selector">
              <select value={projectName} onChange={handleProjectChange}>
                  <option value="Project A">Project A</option>
                  <option value="Project B">Project B</option>
                  <option value="Project C">Project C</option>
              </select>
              <i className="arrow"></i>
              <div className="page-title-box">
                  <h2 className="page-title">Analytics</h2>
  
              </div>
              </div>
          </div>
          <div className='dashboard-body'>
              <img src={LineGraph} alt="Graph" className="graph" />
              <div className="category-selector">
                  <h3 className="selector-title">Keywords</h3>
                  <ul className="category-list">
                  {categories.map((category) => (
                      <li key={category.id}>
                      <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={category.checked}
                          onChange={() => handleCategoryChange(category.id)}
                      />
                      <label htmlFor={`category-${category.id}`}>
                          {category.name}
                      </label>
                      </li>
                  ))}
                  </ul>
              </div>
          </div>
          </div>
      );
}

function ProjectSettings() {

    const [col1Fields, setCol1Fields] = useState([
        {name: "Project Name", value: "Superauto"},
        {name: "Subject website", value: "www.carsensei.com"},
        {name: "Target audience", value: "CPO Buyer"},
        {name: "Geographic area", value: "US - East Coast"}
    ])

    const [col2Fields, setCol2Fields] = useState([
        {name: "Industry", value: "Auto - Sales"}
    ])

    const [seeds, setSeeds] = useState([
        {id: 1, value:"test Drive"},
        {id: 2, value:"used Cars"},
        {id: 3, value:"auto loans"},
        {id: 4, value:"dealership"},
        {id: 5, value:"reviews"},
        {id: 6, value:"online car shopping"},
        {id: 7, value:"car promotions"},
        {id: 8, value:"auto sales"}
    ])

    const deleteSeed = (id) => {
        setSeeds(
            seeds.filter((item) => item.id !== id)
        );
      };

    const handleSeedAdd = (event) => {
        if (event.key === 'Enter') {
          const newSeed = {id: seeds.length, value: event.target.value};
      
          // Add the new item to the state
          setSeeds([...seeds, newSeed]);
      
          // Clear the input field
          event.target.value = '';
        }
    };
    
    return (
        <div className="settings-section">
        <div className="settings-column">
            {col1Fields.map((field) => (
                <div className="settings-field" name={field.name}>
                    <span className="field-label">{field.name}</span>
                    <input type="text" defaultValue={field.value} />
                </div>
                
            ))}
        </div>
        <div className="settings-column">
            {col2Fields.map((field) => (
                <div className="settings-field" name={field.name}>
                    <span className="field-label">{field.name}</span>
                    <input type="text" defaultValue={field.value} />
                </div>
                
            ))}
            <div className="settings-field">
                <span className="field-label seed-field" >Seed Keywords</span>
                <span className="add-seed">
                    <span>Add seed:</span>
                    <input type="text" onKeyDown={handleSeedAdd}/>
                </span>
            </div>
            <div className="seeds-module-body">
                {seeds.map((seed) => (
                    <li key={seed.id}>
                    <span>
                        <span className="seed-name">{seed.value}</span>
                        <button
                            id={`seed-${seed.id}`}
                            onClick={() => deleteSeed(seed.id)}
                        >X</button>
                    </span>
                    <label htmlFor={`seed-${seed.id}`}>
                        {seed.name}
                    </label>
                    </li>
                ))}
            </div>

        </div>
        </div>
    );
}

function AccountSettings() {

    const [col1Fields, setCol1Fields] = useState([
        {name: "Account Name", value: "Superauto"},
        {name: "Email address", value: "boss@superauto.com"},
        {name: "Phone number", value: "970-128-1839"},
        {name: "Country", value: "United States"}
    ])


    const [col2Fields, setCol2Fields] = useState([
        {name: "Street address 1", value: "1924 Victory Lane"},
        {name: "Street address 2", value: "Unit #4"},
        {name: "Zip code", value: "81501"},
        {name: "State", value: "CO"}
    ])


    return (
        <div className="settings-section">
        <div className="settings-column">
            {col1Fields.map((field) => (
                <div className="settings-field" name={field.name}>
                    <span className="field-label">{field.name}</span>
                    <input type="text" defaultValue={field.value} />
                </div>
                
            ))}
        </div>
        <div className="settings-column">
            {col2Fields.map((field) => (
                <div className="settings-field" name={field.name}>
                    <span className="field-label">{field.name}</span>
                    <input type="text" defaultValue={field.value} />
                </div>
                
            ))}
        </div>
        </div>
    );
}


function Settings() {
    const [activeTab, setActiveTab] = useState('project');
    const [projectName, setProjectName] = useState('Project A');
    const [categories, setCategories] = useState([
      { id: 1, name: 'Category A', checked: true },
      { id: 2, name: 'Category B', checked: false },
      { id: 3, name: 'Category C', checked: true },
      { id: 4, name: 'Category D', checked: false },
    ]);

    const handleProjectChange = (e) => {
      setProjectName(e.target.value);
    };
  
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div className="dashboard">
        <div className="header">
            <div className="project-selector">
            <select value={projectName} onChange={handleProjectChange}>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
                <option value="Project C">Project C</option>
            </select>
            <i className="arrow"></i>
            <div className="page-title-box">
                <h2 className="page-title">Settings</h2>
            </div>
            </div>
        </div>
        <div className="settings-body">
            <div className="settings-selector">
                <button
                className={activeTab === 'project' ? 'selector-btn active' : 'selector-btn'}
                onClick={() => handleTabChange('project')}>
                    Project
                </button>
                <button
                className={activeTab === 'account' ? 'selector-btn active' : 'selector-btn'}
                onClick={() => handleTabChange('account')}>
                    Account
                </button>
            </div>
            {activeTab === 'project' && <ProjectSettings />}
            {activeTab === 'account' && <AccountSettings />}
            <div className='settings-save-btn'> 
                <button >Save</button>
            </div>       
        </div>
        </div>
      );

    
}



function App() {
    return (
        <div className="App">
            <Navigator />
        </div>
    );
}


export default App;
