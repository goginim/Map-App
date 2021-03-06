import React, { Component } from 'react';

import classNames from 'classnames';
import Dropdown from '../Dropdown';
import InfoCard from '../InfoCard';

import './SidePanel.scss';

class SidePanel extends Component {
  state = {
    selectedCountries: [],
    selectedCountry: {}
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.selectedCountry !== this.props.selectedCountry) {
      this.setState({ selectedCountry: this.props.selectedCountry });
    }

    if (previousProps.selectedCountries !== this.props.selectedCountries) {
      this.setState({ selectedCountries: this.props.selectedCountries });
    }
  }
  selectContinent = continent => {
    this.props.onSelectContinent(continent);
  };

  selectedCountry = country => {
    this.props.onSelectCountry(country);
  };
  render() {
    const { continents, className } = this.props;
    const { selectedCountries, selectedCountry } = this.state;

    return (
      <div className={classNames('sidePanel', className)}>
        <div className={classNames('sidePanel__option')}>
          <Dropdown
            className={classNames('sidePanel__dropdown')}
            title="Continent"
            options={continents}
            onSelect={this.selectContinent}
          />
          <Dropdown
            className={classNames('sidePanel__dropdown')}
            title="Country"
            options={selectedCountries}
            onSelect={this.selectedCountry}
          />
        </div>
        <div className={classNames('sidePanel__info')}>
          {Object.keys(selectedCountry).length !== 0 && (
            <InfoCard
              country={{
                code: selectedCountry.code,
                name: selectedCountry.name,
                native: selectedCountry.native,
                phone: selectedCountry.phone,
                currency: selectedCountry.currency,
                languages: selectedCountry.languages,
                emoji: selectedCountry.emoji
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SidePanel;
