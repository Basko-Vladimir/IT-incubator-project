import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowUser,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import {usersAPI} from "../../API/API";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false);
                // this.props.setTotalUsersCount(response.data.totalCount); пока закомментил т.к. очень много
                // пользователей, поэтому пока захардкодил 200
            })
    }
    onChangePage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                this.props.setUsers(data.items);
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
                      isFetching={this.props.isFetching}
                      isFollowUser={this.props.isFollowUser}
                      toggleIsFollowUser={this.props.toggleIsFollowUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        isFollowUser: state.usersPage.isFollowUser
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowUser})(UsersContainer);
