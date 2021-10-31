import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic';
import { Button, KIND } from "baseui/button";
import { Avatar } from "baseui/avatar";
import { Breadcrumbs } from "baseui/breadcrumbs";
import { StyledLink } from "baseui/link";
import { Display2 } from 'baseui/typography';
import { Tag, KIND as K, VARIANT } from 'baseui/tag';
import * as Identicon from "identicon.js";

import u from '../utils/users';

import './Content.css';

const AvatarCell = ({ id }) => (
	<div className='center'>
		<Avatar
			overrides={{
				Avatar: {
					style: ({ $theme }) => ({
						borderTopLeftRadius: $theme.borders.radius100,
						borderTopRightRadius: $theme.borders.radius100,
						borderBottomRightRadius: $theme.borders.radius100,
						borderBottomLeftRadius: $theme.borders.radius100,
					}),
				},
				Root: {
					style: ({ $theme }) => ({
						borderTopLeftRadius: $theme.borders.radius100,
						borderTopRightRadius: $theme.borders.radius100,
						borderBottomRightRadius: $theme.borders.radius100,
						borderBottomLeftRadius: $theme.borders.radius100,
					}),
				},
			}}
			key={id} src={`data:image/svg+xml;base64,${new Identicon(id, { format: 'svg' }).toString()}`} alt={id} />
	</div>
);

function Content() {
	return (
		<div className='container'>
			<div className="controls">
				<Breadcrumbs>
					<StyledLink href="#parent">Home</StyledLink>
					<span>Dashboard</span>
				</Breadcrumbs>
			</div>
			<div className="controls">
				<Display2>Users</Display2>
				<div className='content-button-container'>
					<Button>Add User</Button>
				</div>
			</div>
			<div className='table'>
				<TableBuilder data={u}>
					<TableBuilderColumn header="">
						{(row) => (<AvatarCell id={row.key} />)}
					</TableBuilderColumn>
					<TableBuilderColumn header="User Messaged?">
						{({ messaged }) => (<div className='center'> <p>{messaged ? '✅' : '❌'}</p></div>)}
					</TableBuilderColumn>
					<TableBuilderColumn header="Name">
						{({ name }) => (<div className='center'><p>{name}</p></div>)}
					</TableBuilderColumn>
					<TableBuilderColumn header="Color">
						{({ color }) => (
							<div className='center'>
								<Tag color={color} closeable={false} variant={VARIANT.solid} kind={K.custom}>{color}</Tag>
							</div>
						)}
					</TableBuilderColumn>
					<TableBuilderColumn header="Birthday">
						{({ birthday }) => (
							<div className='center'>
								<p>{`${birthday.getUTCFullYear()}-${birthday.getUTCMonth() + 1}-${birthday.getUTCDate()}`}</p>
							</div>
						)}
					</TableBuilderColumn>
					<TableBuilderColumn header="Note">
						{({ note }) => (<div className='center'>{note}</div>)}
					</TableBuilderColumn>
					<TableBuilderColumn header="">
						{({ user }) => (
							<div className='center options-container'>
								<Button>Message</Button>
								<Button kind={KIND.secondary}>Delete</Button>
							</div>
						)}
					</TableBuilderColumn>
				</TableBuilder>
			</div>
		</div>
	);
}

export default Content;
