'use client'

import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Divider from '@mui/joy/Divider';
import * as React from 'react';
import {useState} from 'react';
import {KeyboardArrowDown} from "@mui/icons-material";


export default function MainSearch() {
    const [currency, setCurrency] = useState('dollar');
    return (
        <div className={'flex justify-center'}>
            <Input
                sx={{width: '100%'}}
                placeholder="Amount"
                startDecorator={
                    <React.Fragment>
                        <Select
                            variant="plain"
                            value={currency}
                            indicator={<KeyboardArrowDown/>}
                            onChange={(_, value) => setCurrency(value!)}
                            slotProps={{
                                listbox: {
                                    variant: 'outlined',
                                },
                            }}
                            sx={{
                                mr: -1.5, '&:hover': {bgcolor: 'transparent'}
                            }}
                        >
                            <Option value="dollar">US dollar</Option>
                            <Option value="baht">Thai baht</Option>
                            <Option value="yen">Japanese yen</Option>
                        </Select>
                        <Divider orientation="vertical"
                                 sx={{
                                     "& .MuiDivider-root": {
                                         marginLeft: '0.5rem',
                                     }
                                 }}/>
                    </React.Fragment>
                }

            />
        </div>
    )
}