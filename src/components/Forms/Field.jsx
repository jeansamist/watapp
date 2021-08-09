import react from 'react'

class Field extends react.Component {
    state = {
        value: ""
    }
    handdleChange (event) {
        let newValue = event.target.value;
        this.setState({value: newValue});
    }
    render () {
        return <div className="field">
            <div className="label">{this.props.label}</div>
            <input type={this.props.type} class="input-field" name={this.props.name ? this.props.name : this.props.label.split(" ")} value={this.state.value} onChange={this.handdleChange.bind(this)} />
        </div>
    }
}
export default Field;
