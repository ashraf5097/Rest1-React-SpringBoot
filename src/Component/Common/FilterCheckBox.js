import React from 'react';

const FilterCheckBox = (props) => {

    return (
        <div className = "checkbox-label">
            <div className = "textbox" >
                {props.filterdata}
            </div>
            <div className = "float-checkbox">
                <label class="decorate-checkbox">
                    <span class="checkBox"></span>
                    <svg width="16" class="_2m7ny _1GLei" viewBox="0 0 24 24"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M9.5,18.25 L20.75,7.43269231 L19,5.75 L9.5,14.8846154 L5,10.5576923 L3.25,12.2403846 L9.5,18.25 Z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};
export default FilterCheckBox;

