import React, { useState, useEffect } from 'react';
import './index.scss';
import TextInput from '../TextInput';
import MenuList from '../TrailPopover';
import InfoIcon from '../../../assets/images/info.svg';
import Label from '../Label/index';

const Timeline = (props: any) => {
    const [active, setActive] = useState(props.active);
    useEffect(() => {
        setActive(props.active);
    }, []);
    useEffect(() => {
        setActive(props.active);
    }, [props]);

    const date = new Date(props.requestData?.approvalLevel2?.approvedOn);
    const pendingDate = new Date(props.requestData?.approvalLevel1?.approvedOn);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (
        <div className="timeline">
            <div className="approval_history_area">
                <div className="approval_history_head">
                    <h2>Approval History</h2>
                </div>
                <div className="approval_history_content">
                    <ul>
                        <li
                            className={
                                active == 0 && !props?.finished && !props?.rejected
                                    ? 'step step_remaining'
                                    : active > 0 || props?.finished
                                    ? 'step step_finished'
                                    : 'step'
                            }
                        >
                            {props?.requestData?.approvalLevel1?.approvedOn ? (
                                <div className="mobilePendingDate">
                                    <p>
                                        {pendingDate?.toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}{' '}
                                        ,{pendingDate?.getDate()}
                                        <sup>th</sup> {monthNames[pendingDate?.getMonth()]} {'  '}
                                        {pendingDate?.getFullYear()}
                                    </p>
                                </div>
                            ) : null}

                            <span className="step_icon"></span>
                            <span className="step_label">Approval Pending</span>
                        </li>
                        <li
                            className={
                                active == 1 && !props?.finished && !props?.rejected
                                    ? 'step step_remaining'
                                    : props?.rejected && props?.rejectedBy === 'REJECTED_BY_SUPERVISOR'
                                    ? 'step step_rejected'
                                    : active > 1 || props?.finished
                                    ? 'step step_finished'
                                    : 'step'
                            }
                        >
                            {props?.requestData?.approvalStatus?.includes('REJECTED') ? (
                                <div className="mobileRejectedDate">
                                    <p>
                                        {date?.toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}{' '}
                                        , {date?.getDate()}
                                        <sup>th</sup> {monthNames[date?.getMonth()]} {'  '}
                                        {date.getFullYear()}
                                    </p>
                                </div>
                            ) : props.requestData?.approvalStatus?.includes('APPROVED') ? (
                                <div className="mobileRejectedDate">
                                    <p>
                                        {date?.toLocaleString('en-US', {
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}{' '}
                                        , {date?.getDate()}
                                        <sup>th</sup> {monthNames[date?.getMonth()]} {'  '}
                                        {date?.getFullYear()}
                                    </p>
                                </div>
                            ) : null}

                            <span className="step_icon"></span>
                            {props?.rejected && props?.rejectedBy === 'REJECTED_BY_SUPERVISOR' ? (
                                <div>
                                    <span className="step_label" id="rejectedSupervisor">
                                        Rejected By Supervisor
                                    </span>
                                    {props?.requestData?.approvalStatus === 'REJECTED_BY_SUPERVISOR' ? (
                                        <div className="rejectedIcon">
                                            <MenuList
                                                itemsArray={[
                                                    {
                                                        avatarURL:
                                                            'https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_2.jpg',
                                                        userName: props?.requestData?.approvalLevel2?.approvedBy
                                                    }
                                                ]}
                                                src={InfoIcon}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            ) : (
                                <span className="step_label">Approved By Supervisor</span>
                            )}
                            {/* <span className="step_label">Approved By Supervisor</span> */}
                        </li>
                        {/* <li
                            className={
                                active == 2 && !props.finished
                                    ? 'step step_remaining'
                                    : active > 2 || props.finished
                                    ? 'step step_finished'
                                    : 'step'
                            }
                        >
                            <span className="step_icon"></span>
                            <span className="step_label">Syncing With PPIS</span>
                        </li> */}
                        <li
                            className={
                                props?.finished && !props?.rejected
                                    ? 'step step_finished'
                                    : props?.rejected && props?.rejectedBy === 'REJECTED_BY_RD'
                                    ? 'step step_rejected'
                                    : active == 2
                                    ? 'step step_remaining'
                                    : 'step'
                            }
                        >
                            <span className="step_icon"></span>
                            {props?.rejected && props?.rejectedBy === 'REJECTED_BY_RD' ? (
                                <span className="step_label ">Rejected By Regional Director</span>
                            ) : (props?.rejected && props?.rejectedBy == 'APPROVED_BY_RD') ||
                              (props?.rejected && props?.rejectedBy == 'REJECTED_BY_SUPERVISOR') ? (
                                <span className="step_label">Approved By Regional Director</span>
                            ) : (
                                <span className="step_label">Approval Pending By Regional Director</span>
                            )}
                        </li>
                    </ul>
                </div>

                {props?.requestData?.approvalLevel1?.approvedOn ? (
                    <div className="desktopPendingDate">
                        <p>
                            {pendingDate?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}{' '}
                            ,{pendingDate?.getDate()}
                            <sup>th</sup> {monthNames[pendingDate?.getMonth()]} {'  '}
                            {pendingDate?.getFullYear()}
                        </p>
                    </div>
                ) : null}

                {props?.requestData?.approvalStatus?.includes('REJECTED') ? (
                    <div className="desktopRejectedDate">
                        <p>
                            {date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ,{' '}
                            {date?.getDate()}
                            <sup>th</sup> {monthNames[date?.getMonth()]} {'  '}
                            {date?.getFullYear()}
                        </p>
                    </div>
                ) : props?.requestData?.approvalStatus?.includes('APPROVED') ? (
                    <div className="desktopRejectedDate">
                        <p>
                            {date?.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} ,{' '}
                            {date?.getDate()}
                            <sup>th</sup> {monthNames[date?.getMonth()]} {'  '}
                            {date?.getFullYear()}
                        </p>
                    </div>
                ) : null}
                {props?.requestData?.approvalStatus?.includes('REJECTED') ? (
                    <div className="rejectedInput">
                        <Label label="Remarks" />
                        <TextInput
                            disabled={true}
                            value={
                                props?.requestData?.approvalLevel2?.approvalComments
                                    ? props?.requestData?.approvalLevel2?.approvalComments
                                    : props?.requestData?.approvalLevel3?.approvalComments
                                    ? props?.requestData?.approvalLevel3?.approvalComments
                                    : 'rejected'
                            }
                            variant="outlined"
                            // fullWidth={true}
                            type="text"
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Timeline;
