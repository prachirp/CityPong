#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var speed : float = 10;

function Start () {
}

function Update () {
	
	var rb = GetComponent(Rigidbody2D);

	if(Input.GetKey(moveUp)){	
		rb.velocity.x = speed;
	}
	else if(Input.GetKey(moveDown)){
		rb.velocity.x = speed * -1;
	}
	else{
		rb.velocity.x = 0;
	}
	
}