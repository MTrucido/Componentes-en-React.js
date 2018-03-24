// 4 Formas de crear componetes en React

// Función pura
function Comentario(props) {
  const nombre = props.usuario_nombre
  const avatar = props.usuario_avatar
  const texto = props.texto
  return (
    <div>
      <img src={avatar} />
      <h3>{nombre}</h3>
      <p>{texto}</p>
    </div>
  );
}

//-------------------------------------------------------------

// Este metodo se va a descartar de la librería
// Permiete usar Mixint
const Comentario = React.createClass({
  // Hay que usar getInitialState() para crear el estado
  getInitialState () {
    return {
      me_gusta: false
    }
  },
  dar_Me_Gusta () {
    this.setState({
      me_gusta: !this.state.me_gusta
    })
  },
  render () {
    const nombre = props.usuario_nombre
    const avatar = props.usuario_avatar
    const texto = props.texto
    return (
      <div>
        <img src={avatar} />
        <h3>{nombre}</h3>
        <p>{texto}</p>
        <button onClick={this.dar_Me_Gusta}>
          Me gusta
        </button>
      </div>
    )
  }
})

//-------------------------------------------------------------

// Con clases
// Este es el metodo ideal
// Es la manera recomendada
class Comentario extends React.Component {
  constructor(props) {
    super(props)
    // Tiene la ventaja de tener estados
    this.state = {
      me_gusta: false
    }
    // Aqui es un buen lugar para hacer bind
    this.dar_Me_Gusta = this.dar_Me_Gusta.bind(this)
  }

  dar_Me_Gusta() {
    this.setState({
      me_gusta: !this.state.me_gusta
    })
  }

  render() {
    const nombre = props.usuario_nombre
    const avatar = props.usuario_avatar
    const texto = props.texto
    return (
      <div>
        <img src={avatar} />
        <h3>{nombre}</h3>
        <p>{texto}</p>
        <button onClick={this.dar_Me_Gusta}>
          Me gusta
        </button>
      </div>
    );
  }
}

//-------------------------------------------------------------

// Componetes puros
// La ventaja es que solo se renderiza si hay un cambio en las props o en el estado
// La desventaja es que si no es un último nodo de la rama del DOM,
// y su estado no cambió, bloquea el renderizada de todos los nodos hijos.
class MiComponente extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      me_gusta: false
    };
    this.dar_Me_Gusta = this.dar_Me_Gusta.bind(this)
  }

  dar_Me_Gusta() {
    this.setState({
      me_gusta: !this.state.me_gusta
    })
  }

  render() {
    const nombre = props.usuario_nombre
    const avatar = props.usuario_avatar
    const texto = props.texto
    return (
      <div>
        <img src={avatar} />
        <h3>{nombre}</h3>
        <p>{texto}</p>
        <button onClick={this.dar_Me_Gusta}>
          Me gusta
        </button>
      </div>
    )
  }
}
