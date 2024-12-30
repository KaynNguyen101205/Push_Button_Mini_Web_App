provider "aws" {
  region = "ap-southeast-1"
}

resource "aws_instance" "server" {
  associate_public_ip_address = true

  ami           = "ami-060e277c0d4cce553"
  instance_type = "t2.micro"
  subnet_id     = "subnet-0af276e4c10a3369e"
  key_name      = "biglab"
}

