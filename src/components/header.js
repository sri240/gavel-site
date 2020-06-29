import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `0px`,
    }}
  >
    <div class="sticky"
      style={{
        margin: `0 auto`,
        maxWidth: "960",
        padding: `1.3rem 10px`,
      }}
    >
      <h1 style={{ margin: "0",
            font: '50px Cinzel, serif',
            color: `gold`,
            textDecoration: `none`,
            textAlign: "center", marginBottom:"0px"
          }}
        >
          {siteTitle}
      </h1>
      <div style={{textAlign:"center", width:"100% ",marginLeft:"0px",margin:"0px",background:"black",padding:"0px",
      marginTop:"3px"}}>
        <Link to="/" style={{
            color: "gold",width:"140px",height:"15px",marginRight:"100px",
          }}><span style={{textAlign:"center",padding:"5px",}}>HOME</span></Link>
          <Link to="/register/" style={{
            color: "gold",width:"140px",height:"15px",marginRight:"100px",
          }}><span style={{textAlign:"center",padding:"5px",}}>REGISTER</span></Link>
          <Link to="/members/" style={{
            color: "gold",maxWidth:"120px",height:"15",marginRight:"100px"
          }}><span style={{textAlign:"center",padding:"5px",}}>MEMBERS</span></Link>
          <Link to="/contact/" style={{
            color: "gold",maxWidth:"120px",height:"15",
          }}><span style={{textAlign:"center",padding:"5px",}}>CONTACT</span></Link>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
