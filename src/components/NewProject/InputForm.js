import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './InputForm.scss'
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

	const onClick = () => {
		var formdata = new FormData();
		formdata.append('project', new Blob([JSON.stringify(projectForm)], {type: "application/json"}));
		formdata.append('file', imag);
		axios.post(`${SERVER_IP}/project`, formdata);
		alert('프로젝트 등록완료!.');
		window.location = '/';
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
		try {const addressList = address.filter(addressOne => addressOne.region3 === dongSelect);
		onChangeRegion(addressList[0].id);
		} catch (err) {
			console.log(err);
		}
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
			<div className = "InputForm-template">
				<div className = "InputForm">
					<div className = "name">
						<span>프로젝트 이름 : </span>
						<input type="text" name="title" value={projectForm.title} onChange={onChangeForm} />
					</div>
					<div className = "description">
						<span>프로젝트 설명 : </span>
						<textarea type="text" name="description" value={projectForm.description} onChange={onChangeForm} />
					</div>
					<div className = "contents">
						<span>프로젝트 컨텐츠 : </span>
						<textarea type="text" name="content" value={projectForm.content} onChange={onChangeForm} />
					</div>
					<div className = "maxParticipation">
						<span>최대 참가인원 : </span>
						<input type="text" name="maxParticipateNum" value={projectForm.maxParticipateNum} onChange={onChangeForm} />
					</div>
					<div className = "location">
						<span>모임 위치:</span>
						<span>
							<select name="region1" onChange={(e) => onGuSelect(e.target.value)}>
								<option value="citydefault" key="city">시 / 도</option>
								{cities.map(city => (
								<option value={city.region1}
												key={city.id}>{city.region1}</option>
								))}
							</select>
						</span>
						<span>
							<select name="region2" onChange={(e) => onDongSelect(e.target.value, cityURL)} >
								<option value="gu" key="gu">구 / 군</option>
								{guguns.map(gugun => (
								<option value={gugun.region2}
												key={gugun.id}>{gugun.region2}</option>
								))}
							</select>
						</span>
						<span>
							<select name="region3" onChange={(e) => onAddressCode(e.target.value, dongs)}>
								<option value="dong" key="dong">동 / 리</option>
								{dongs.map(dong => (
								<option value={dong.region3}
												key={dong.id}>{dong.region3}</option>
								))}
							</select>
						</span>
					</div>
					<div className = "subject">
						<span>주제 분류:</span>
						<span>
							<select name="subject" onChange={(e) => onSubjectFirst(e.target.value)}>
								<option value="subject" key="subject">주제</option>
								{subjects.map(subject => (
									<option value={subject.subject1}
													key={subject.id}>{subject.subject1}</option>
								))}
							</select>
						</span>
						<span>
							<select name="subject2" onChange={(e) => onSubjectSecond(e.target.value, topics)}>
								<option value="subject2" key="subject2" >세부주제</option>
								{topics.map(topic => (
									<option value={topic.subject2}
													key={topic.id}>{topic.subject2}</option>
								))}
							</select>
						</span>
					</div>
					<div className = "imagefile">
						<span>배너 이미지:</span>
						<input type="file" accept="image/jpeg, image/jpg, image/png, image/svg, image/gif" onChange={onChange}/>
					</div>
					<div>
						<button className = "submit" onClick={onClick}>제출</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputForm;
