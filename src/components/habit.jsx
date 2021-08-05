import React, { PureComponent } from 'react';


class Habit extends PureComponent {
    //컴포넌트가 ui상에 등록되었을때 => 사용자에게 보여질때 호출
    componentDidMount(){
        console.log(`habit : ${this.props.habit.name} mounted`)
    }
      //컴포넌트가 지워질때 호출 
    componentWillUnmount(){
        console.log( `habit : ${this.props.habit.name} wil unmounted`)
    }



    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }

    handleDerement = () => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log('habit')
        const {count, name} = this.props.habit ;
        return (
            <li className="habit">
           <span className="habit-name">{name}</span>
           <span className="habit-count">{count}</span>
           <button className="habit-button habit-increase"
           onClick={this.handleIncrement}
           >
           <i className="fas fa-plus-square"></i>
           </button>
           <button className="habit-button habit-decrease"
           onClick={this.handleDerement}
           >
           <i className="fas fa-minus-square"></i>
           </button>
           <button className="habit-button habit-delete"
           onClick={this.handleDelete}
           >
           <i className="fas fa-trash"></i>
           </button>
            </li>
        );
    }
}

export default Habit;
