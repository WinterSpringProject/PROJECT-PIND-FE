import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SERVER_IP } from '../../constants/serverInfo';

const InputForm = () => {
	const [imag, setImage] = useState(null);
	const [cityURL, setCityURL] = useState("");
	const [cities, setCities] = useState([]);
	const [guguns, setGuGuns] = useState([]);
	const [dongs, setDongs] = useState([]);
	const [subjects, setSubjects] = useState([]);
	const [topics, setTopics] = useState([]);
	const [projectForm, setProjectForm] = useState(
		{
			title: "",
			description: "",
			content : "",
			leader: {
				id: 2
			},
			region: {
				id: ""
			},
			subject: {
				id: ""
			},
			maxParticipateNum: "",
			startDate: "2021-04-26T08:02:50.177Z"
		}
	);

	const onChange = (e) => {
		setImage(e.target.files[0]);
	};

	const onChangeForm = (e) => {
		const {value, name} = e.target;
		setProjectForm({
			...projectForm,
			[name]: value
		});
	};

	const onChangeRegion = (address) => {
		setProjectForm({
			...projectForm,
			region : {id: address}
		});
	}

	const onChangeSubject = (subject) => {
		setProjectForm({
			...projectForm,
			subject : {id: subject}
		});
	}

	const onReset = () => {
		setProjectForm(
			{
				title: "",
				description: "",
				content : "",
				leader: {
					id: 2
				},
				region: {
					id: "",
				},
				subject: {
					id: ""
				},
				maxParticipateNum: "",
				startDate: "2021-04-10T08:02:50.177Z"
			}
		)
	};

	const onClick = () => {
		var formdata = new FormData();
		formdata.append('project', new Blob([JSON.stringify(projectForm)], {type: "application/json"}));
		formdata.append('file', imag);
		const res = axios.post(`${SERVER_IP}/project`, formdata);
		console.log(res);
		onReset();
	};

	useEffect(() => {
		onCitySelect();
		onSubjectSelect();
	},[]);

	const onCitySelect = async () => {
		const citydata = await axios.get(`${SERVER_IP}/region?`);
		try {
			setCities(citydata.data);
		} catch (err) {
			console.log(err);
		}
	};

	const onGuSelect = async (citySelect) => {
		const gudata = await axios.get(`${SERVER_IP}/region?region1=${citySelect}`);
		try {
			setGuGuns(gudata.data);
			setCityURL(citySelect);
		} catch (err) {
			console.log(err);
		}
	}

	const onDongSelect = async (guSelect, citySelect) => {
		const dongdata = await axios.get(`${SERVER_IP}/region?region1=${citySelect}&region2=${guSelect}`);
		try {
			setDongs(dongdata.data);
		} catch (err) {
			console.log(err);
		}
	}

	const onAddressCode = async (dongSelect, address) => {
		const addressList = address.filter(addressOne => addressOne.region3 === dongSelect);
		onChangeRegion(addressList[0].id);
	}

	const onSubjectSelect = async () => {
		const subjectData = await axios.get(`${SERVER_IP}/subject`);
		try {
			setSubjects(subjectData.data);
		} catch (err) {
			console.log(err);
		}
	}

	const onSubjectFirst = async (subjectSelect) => {
		const subjectSecondData = await axios.get(`${SERVER_IP}/subject?subject1=${subjectSelect}`)
		try {
			setTopics(subjectSecondData.data);
		} catch (err) {
			console.log(err);
		}
	}

	const onSubjectSecond = async (subjectSelect, topics) => {
		const subjectList = topics.filter(topicOne => topicOne.subject2 === subjectSelect)
		onChangeSubject(subjectList[0].id)
	}

	return (
		<div>
				<p>
					<strong>프로젝트 이름 : </strong>
					<input type="text" name="title" value={projectForm.title} onChange={onChangeForm} />
				</p>
				<p>
					<strong>프로젝트 설명 : </strong>
					<input type="text" name="description" value={projectForm.description} onChange={onChangeForm} />
				</p>
				<p>
					<strong>프로젝트 소개 : </strong>
					<input type="text" name="content" value={projectForm.content} onChange={onChangeForm} />
				</p>
				<p>
					<strong>최대 참가인원 : </strong>
					<input type="text" name="maxParticipateNum" value={projectForm.maxParticipateNum} onChange={onChangeForm} />
				</p>
				<p>
					<select name="region1" onChange={(e) => onGuSelect(e.target.value)}>
						<option value="city">시 / 도</option>
						{cities.map(city => (
						<option value={city.region1}
										key={city.id}>{city.region1}</option>
						))}
					</select>
				</p>
				<p>
					<select name="region2" onChange={(e) => onDongSelect(e.target.value, cityURL)} >
						<option value="city">구 / 군</option>
						{guguns.map(gugun => (
						<option value={gugun.region2}
										key={gugun.id}>{gugun.region2}</option>
						))}
					</select>
				</p>
				<p>
					<select name="region3" onChange={(e) => onAddressCode(e.target.value, dongs)}>
						<option value="city">동 / 리</option>
						{dongs.map(dong => (
						<option value={dong.region3}
										key={dong.id}>{dong.region3}</option>
						))}
					</select>
				</p>
				<p>
					<select name="subject" onChange={(e) => onSubjectFirst(e.target.value)}>
						<option value="city">주제</option>
						{subjects.map(subject => (
							<option value={subject.subject1}
											key={subject.id}>{subject.subject1}</option>
						))}
					</select>
				</p>
				<p>
					<select name="subject" onChange={(e) => onSubjectSecond(e.target.value, topics)}>
						<option value="city">세부주제</option>
						{topics.map(topic => (
							<option value={topic.subject2}
											key={topic.id}>{topic.subject2}</option>
						))}
					</select>
				</p>
				<input type="file" accept="image/jpeg, image/jpg, image/png, image/svg, image/gif" onChange={onChange}/>
				<button onClick={onClick}>제출</button>
			{/*<div>
				{projectForm.title}<br/>
				{projectForm.description}<br/>
				{projectForm.content}<br/>
				{projectForm.leader.id}<br/>
				{projectForm.region.id}<br/>
				{projectForm.subject.id}<br/>
				{projectForm.maxParticipateNum}<br/>
				{projectForm.startDate}<br/>
			</div>*/}
		</div>
	);
};

export default InputForm;
