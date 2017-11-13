const ProjectionOrigin = new Vector3(0, 0, 0);
const ProjectionPlane = new Vector3(0, 0, 1);

function ProjectPoint(point) {
	return new Vector2(point.x / point.z, point.y / point.z);
}

function ProjectLine(line) {
	return new Line(ProjectPoint(line.start), ProjectPoint(line.end));
}