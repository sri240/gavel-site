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
      marginTop:"3px", marginBottom:"-5px"}}>
        <a href="/" style={{marginRight:"80px",
          }}><button>HOME</button></a>
          <a href="/register/" style={{marginRight:"80px",
          }}><button>REGISTER</button></a>
          <a href="/members/" style={{marginRight:"80px"
          }}><button>MEMBERS</button></a>
          <a href="/contact/" style={{
            color: "gold",maxWidth:"120px",height:"15",
          }}><button>CONTACT</button></a>
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
