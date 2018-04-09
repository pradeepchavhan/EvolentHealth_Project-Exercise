using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace ContactManagement.Models.DAL
{
    public class Contact
    {
       public int Id { get; set; }

        [Display(Name = "First Name")]
        [Required(ErrorMessage = "Please enter first name")]
        [MaxLength(50, ErrorMessage = "characters should not be greater than 50")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        [Required(ErrorMessage = "Please enter last name")]
        [MaxLength(50, ErrorMessage = "characters should not be greater than 50")]
        public string LastName { get; set; }

        [Display(Name = "Phone Number")]
        [Required(ErrorMessage = "Please enter phone number")]
        [MaxLength(10, ErrorMessage = "characters should not greater than 10")]
        public string PhoneNumber { get; set; }

        [Display(Name = "Email Address")]
        [Required(ErrorMessage = "Please enter email address")]
        [MaxLength(50, ErrorMessage = "characters should not greater than 50")]
        [EmailAddress]
        public string EmailAddress { get; set; }

        public bool Status { get; set; }
    }
}