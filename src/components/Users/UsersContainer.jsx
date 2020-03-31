import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{
            withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
                // this.props.setTotalUsersCount(response.data.totalCount); пока закомментил т.к. очень много
                // пользователей, поэтому пока захардкодил 200
            })
    }

    onChangePage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`,{
            withCredentials: true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    };

    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangePage={this.onChangePage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
