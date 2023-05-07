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
//       </div>
//       <div className="category-selector">
//         <h2>Categories</h2>
//         <ul>
//           <li>
//             <label>
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
// }

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
  return <h2>Analytics</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function App() {
    return (
        <div className="App">
            <Navigator />
        </div>
    );
}


export default App;
