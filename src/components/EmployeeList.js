import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { employeesFetch } from '../actions';
import { CardSection } from './common';
import { Text } from 'react-native';


class EmployeeList extends Component {
  componentWillMount() {;
    this.createDataSource();
  }

  createDataSource() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    const { name } = employee.item;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>
            {name}
        </Text>
      </CardSection>
    )
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={(employee) => employee.uid.toString()} />
    )
  }
}

const styles = {
  titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
  }
}


const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);  
 