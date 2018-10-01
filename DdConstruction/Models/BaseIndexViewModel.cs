namespace DdConstruction.Models
{
    public class BaseIndexViewModel
    {
        public BaseIndexViewModel(string angularApplicationName) => AngularApplicationName = angularApplicationName;

        public string AngularApplicationName { get; set; }
    }
}